
const labelMap = {
    1:{name:'thumbsup', color:'red'},
    2:{name:'thumbsdown', color:'yellow'},
    3:{name:'thankyou', color:'lime'},
    4:{name:'love', color:'blue'},
}
const emojiGifs = {
    'thumbsup': "/3nRF.gif",
    'thumbsdown':'/4q3o.gif',
    'thankyou': '/thankyou.gif',
    'love': '/love.gif',
  };

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx, ctx2) => {
    for (let i = 0; i <= boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extract variables
            const [y, x, height, width] = boxes[i];
            const text = classes[i];
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color'];
            ctx.lineWidth = 10;
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';

            // Load and draw the emoji image
            const emojiGifUrl = emojiGifs[labelMap[text]['name']];
            const img = new Image();
            img.src = emojiGifUrl;

            // Draw the image component directly on the canvas
            ctx.beginPath();
            ctx.drawImage(img, x * imgWidth, y * imgHeight, width * imgWidth/4, height * imgHeight/2);

            // Draw text and rectangle around the detected object
            //ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10);
            //ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 2);
            ctx.stroke();
        }
    }
};
