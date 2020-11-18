# Done With It App

App that lets you deal with things that you are done with. 

## Notes: 
### Expo 

You can pull up the developer menu using cmd + d or ctrl + d

### Publishing

You can publish you app on expo so that you can view the application without going through the app store. 

## React Native

### View 

View is similar to a div as it represents the view on the screen.

### SafeAreaView

This is a wrapper that allows you make a container that is within the area of the viewable screen. E.i. it will make it so that the iPhone notch isn't included in your sizing. 

### Text

This can be used as a container for text. Default behavior is to wrap but if you add the numberOfLines property, you can tell it how many lines it will take up.

- onPress = used for links

### Images

This can be used to reference local files or online images. 

Local: source={require('./assets/icon.png')}
Online: source={ { uri: "imageURL" } }

### Touchables

Images are not inherently touchable, but with the touchable container, you can make anything 'touchable'.

Ex. 
- TouchableWithoutFeedback - touch and nothing happens
- TouchableHighlight - it highlights the item 
- TouchableOpacity - it has a quick fade effect that happens when you touch it. 

### Button 

When you use button, it will defer to the native default style of each OS. It will work like normal and all you need to do is add an onPress to add functionality. 

## Some API's 
### Stylesheet

Style sheet api can be used when adding style so that is can add debugging when you define css properties. 

### Platform 

Used to get what platform the current code is running on. Useful if you want to conditionally set code on specific OS.

### StatusBar

Used to get the info on the status bar (in Android I think). You can do StatusBar.height to get the current height of the status bar. 

