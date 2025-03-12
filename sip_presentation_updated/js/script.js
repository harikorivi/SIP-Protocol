// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
    
    // Code highlighting (simple version)
    document.querySelectorAll('pre code').forEach(block => {
        const lines = block.innerHTML.split('\n');
        let formattedCode = '';
        
        lines.forEach(line => {
            // Simple highlighting for SIP methods
            line = line.replace(/\b(INVITE|ACK|BYE|CANCEL|REGISTER|OPTIONS|REFER|SUBSCRIBE|NOTIFY|INFO|UPDATE|MESSAGE)\b/g, 
                               '<span style="color: #e74c3c; font-weight: bold;">$1</span>');
            
            // Simple highlighting for SIP headers
            line = line.replace(/\b(Via|From|To|Call-ID|CSeq|Contact|Content-Type|Content-Length)\b/g, 
                               '<span style="color: #3498db;">$1</span>');
            
            // Simple highlighting for XML tags
            line = line.replace(/(&lt;\/?)([\w-]+)(&gt;)/g, 
                               '$1<span style="color: #2ecc71;">$2</span>$3');
            
            formattedCode += line + '\n';
        });
        
        block.innerHTML = formattedCode;
    });
    
    // Add responsive behavior for images
    const images = document.querySelectorAll('.image-content img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('expanded');
            if (this.classList.contains('expanded')) {
                this.style.maxWidth = '90vw';
                this.style.maxHeight = '90vh';
                this.style.position = 'fixed';
                this.style.top = '50%';
                this.style.left = '50%';
                this.style.transform = 'translate(-50%, -50%)';
                this.style.zIndex = '1000';
                this.style.cursor = 'zoom-out';
                
                // Add overlay
                const overlay = document.createElement('div');
                overlay.classList.add('image-overlay');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
                overlay.style.zIndex = '999';
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', function() {
                    img.click();
                });
            } else {
                this.style.maxWidth = '';
                this.style.maxHeight = '';
                this.style.position = '';
                this.style.top = '';
                this.style.left = '';
                this.style.transform = '';
                this.style.zIndex = '';
                this.style.cursor = 'zoom-in';
                
                // Remove overlay
                const overlay = document.querySelector('.image-overlay');
                if (overlay) {
                    overlay.remove();
                }
            }
        });
        
        // Set initial cursor style
        img.style.cursor = 'zoom-in';
    });
});
