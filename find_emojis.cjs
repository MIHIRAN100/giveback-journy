const fs = require('fs');
const path = require('path');
const emojiRegex = /[\u{1F300}-\u{1F9FF}]/u;

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) {
            if (!p.includes('node_modules') && !p.includes('.git')) walk(p);
        } else if (['.js', '.jsx', '.css', '.html'].includes(path.extname(p))) {
            const c = fs.readFileSync(p, 'utf8');
            if (emojiRegex.test(c)) {
                console.log(p);
            }
        }
    });
}
walk('./src');
