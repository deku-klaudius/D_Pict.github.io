const fs = require('fs');

function convertToJSX(html) {
    let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!body) return '';
    let content = body[1];

    // Remove script tags
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Remove style tags
    content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    // Convert class to className
    content = content.replace(/\bclass=/g, 'className=');
    
    // Convert for to htmlFor
    content = content.replace(/\bfor=/g, 'htmlFor=');
    
    // Convert inline styles to React style objects
    content = content.replace(/style="background-image:\s*url\('([^']+)'\);?"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');
    content = content.replace(/style="width:\s*([^"]+)"/g, 'style={{ width: "$1" }}');
    
    // Self close common empty tags
    content = content.replace(/<(img|hr|br|input)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
    
    // Remove HTML comments
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

    return content;
}

function processFile(name, outName, componentName) {
    let html = fs.readFileSync(`_backup_legacy/${name}`, 'utf8');
    let jsx = convertToJSX(html);

    // Replace internal <a> tags with <Link> carefully
    // Replace index.html, about.html, contact.html
    jsx = jsx.replace(/<a\b([^>]*)href="index\.html"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/"$2>$3</Link>');
    jsx = jsx.replace(/<a\b([^>]*)href="about\.html"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/about"$2>$3</Link>');
    jsx = jsx.replace(/<a\b([^>]*)href="contact\.html"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/contact"$2>$3</Link>');
    
    // Also catch relative ./about.html etc
    jsx = jsx.replace(/<a\b([^>]*)href="\.\/index\.html"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/"$2>$3</Link>');
    jsx = jsx.replace(/<a\b([^>]*)href="\.\/about\.html"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/about"$2>$3</Link>');
    jsx = jsx.replace(/<a\b([^>]*)href="\.\/contact\.html"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/contact"$2>$3</Link>');

    let reactCode = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ${componentName}() {
${componentName === 'Home' ? `
    useEffect(() => {
        const wrap = document.querySelector('.carousel-wrap');
        const items = document.querySelectorAll('.carousel-item');
        if (!wrap || items.length === 0) return;

        let currentAngle = 0;
        let targetAngle = 0;
        let isHovered = false;
        const theta = 360 / items.length;

        const enterHandlers = [];
        const leaveHandlers = [];

        items.forEach((item, index) => {
            const enter = () => {
                isHovered = true;
                let remainder = currentAngle % 360;
                if (remainder > 0) remainder -= 360; 
                let targetBase = -index * theta;
                let diff = targetBase - remainder;
                if (diff > 180) diff -= 360;
                if (diff < -180) diff += 360;
                targetAngle = currentAngle + diff;
            };
            const leave = () => { isHovered = false; };
            
            item.addEventListener('mouseenter', enter);
            item.addEventListener('mouseleave', leave);
            enterHandlers.push(enter);
            leaveHandlers.push(leave);
        });

        let animationId;
        function update() {
            if (!isHovered) {
                targetAngle -= 0.5; 
            }
            currentAngle += (targetAngle - currentAngle) * 0.1; 
            wrap.style.transform = \`rotateY(\${currentAngle}deg)\`;

            items.forEach((item, index) => {
                let absAngle = (index * theta + currentAngle) % 360;
                if (absAngle < 0) absAngle += 360;
                if (absAngle > 180) absAngle -= 360;
                let dist = Math.abs(absAngle);
                
                let blur = (dist / 180) * 6; 
                let op = 1 - (dist / 180) * 0.8;
                
                item.style.filter = \`blur(\${blur}px)\`;
                item.style.opacity = op;
            });
            animationId = requestAnimationFrame(update);
        }
        update();

        return () => {
            cancelAnimationFrame(animationId);
            items.forEach((item, i) => {
                item.removeEventListener('mouseenter', enterHandlers[i]);
                item.removeEventListener('mouseleave', leaveHandlers[i]);
            });
        };
    }, []);
` : ''}
    return (
        <main>
            ${jsx}
        </main>
    );
}
`;

    fs.mkdirSync('src/pages', { recursive: true });
    fs.writeFileSync(`src/pages/${outName}`, reactCode);
}

try {
    processFile('index.html', 'Home.jsx', 'Home');
    processFile('about.html', 'About.jsx', 'About');
    processFile('contact.html', 'Contact.jsx', 'Contact');
    console.log("Conversion successful");
} catch(e) {
    console.error(e);
}
