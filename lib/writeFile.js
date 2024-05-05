
function svgMarkUp(shape, data){
	return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	${shape}
	<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.letters}</text>
</svg>
`
}
module.exports = svgMarkUp