# CAPTURE WITH YOUR OWN WAY📷
# Photography Slideshow

We use this simple photography slideshow at [comparethemarket.com](https://github.com/ComparetheMarket) to display our images in the office.

## Configuring the Images

In `/config/images.json` you can customise the array of image objects. Each has the following key/value pairs:

- `src` - **REQUIRED** - The image src for wherever your image is hosted
- `title` - *OPTIONAL* - The image title, will be displayed as part of a watermark placed on the image
- `photographer` - *OPTIONAL* - The photographer who took the image, will be displayed as part of the watermark
- `watermarkPosition` - *OPTIONAL* - Must be one of `right`, `left` or `center`. The default is `right`. This determines the alignment of the watermark.

When the app starts it will cycle through the array of images and display them in order.

## Developing

### Getting Started

This is a very basic app created with `create-react-app`.

To get started:

- git clone
- `npm install`
- `npm start`

There are no tests at present!

### Build and Serve

To create the production build: `npm run build`
To start the production server: `npm run serve`
