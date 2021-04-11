# easy-drawing-board

a easy to use drawing board lib 🎨

## Installing
Using npm:
```
npm install easy-drawing-board
```
Using yarn:
```
yarn add easy-drawing-board
```
Using script tag
```html
<script src="your_path/dist/easy-drawing-board.js"></script>
```

## Play

[live example](https://codepen.io/kaierchou/project/editor/AEepEK#)    

or  

git clone this repository then open `example/index.html` in your browser  

![example1](https://user-images.githubusercontent.com/24623866/84254771-43181900-ab44-11ea-8621-8a9757d167bd.gif)

![example1](https://user-images.githubusercontent.com/24623866/84254776-44494600-ab44-11ea-8c4d-3ada333075a0.gif)

## Usage
### Initialize

```html
<script type="text/javascript" src="//{you path to the dist file}/dist/easy-drawing-board.js"></script>
<style>.container { width: 500px; height: 500px; }</style>
<div class="container"></div>
```

```javascript
// See below for document.
const options = {
  container: document.getElementsByClassName('container')[0]
}
// canvas's width/height equals container's width/height
const draw = new EasyDrawingBoard(options); 
```

### Options
| Options        |      Type          | Default value |     Description                               |
| :- | :-: | :-: | :- |
| container      | HtmlDom (required) |  /            | Container for canvas                          |
| bgImg          | String             |  Empty string | Canvas background Image's url, if you needed. |
| canvasBgColor  | String             |  #fff         | Canvas background Color                       |
| lineColor      | String             |  #f00         | Color of brush                                |
| lineWidth      | String / Number    |  1            | Width of brush                                |
| arrowSize      | String / Number    |  15           | Size of arrows                                |
| eraserSize     | String / Number    |  10           | Size of eraser                                |
| textFontSize   | String / Number    |  16           | Font size of the textArea                     |
| textLineHeight | String / Number    |  20           | Font lineheight of the textArea               |
| textColor      | String             |  #f00         | Font color of the textArea                    |
| textareaPlaceholder | String             |  Type here...         | Textarea's placeholder                    |

### APIs

| Method                | Arguments                                                | Description          |
| :-: | :- | :- |
| config( type,val )    | tpye's enum(lineColor, lineWidth, arrowSize, eraserSize, canvasBgColor, textFontSize, textLineHeight, textColor, bgImg, textareaPlaceholder)     | Modifying the default configuration |
| setMode( mode )       | mode's enum(pencil, straightLine, rect, circle, arrow, eraser)   | Set current mode                              |
| saveImg( [options] )  | default value { tpye: 'png', fileName: 'canvas_imgae' }  | Save the canvas as an image, and download.    |
| generateBase64([type])| default value "png"                                      | Generate Base64 data                          |
| undo()                | /                                                        | undo operation                                |
| redo()                | /                                                        | redo operation                                |
| clear()               | /                                                        | Clear canvas                                  |

#### example

```JavaScript
  // init
  import EasyDrawingBoard from 'easy-drawing-board'
  const container = document.getElementsByClassName('container')[0]
  const draw = new EasyDrawingBoard({container: container})

  // methods
  draw.conifg('lineColor', '#FF1493')                         // Change the color of the brush.
  draw.setMode('rect')                                        // Now you can draw the rectangle.

  draw.generateBase64().then(data => console.log(data))       // generateBase64 method default is to export the PNG base64 data.                              
  draw.generateBase64('jpeg').then(data => console.log(data)) // get smaller data.                          

  draw.saveImg()                                              // Save the canvas as an PNG images, and the file name is canvas_imgae.png.
  draw.saveImg({fileName: '233.png'})                         // Just Change of file name.
  draw.saveImg({tpye: 'jpeg', fileName: 'small.jpeg'})        // Sometimes we just need smaller pictures.
```


## Todo

- [x] eraser
- [x] undo
- [ ] typescript refactoring

## License
[MIT](https://opensource.org/licenses/MIT)  
