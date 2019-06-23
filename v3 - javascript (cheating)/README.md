# Javascript Trex bot
The following content is take from [mathewsachin](https://mathewsachin.github.io/blog/2016/11/05/chrome-dino-hack.html)'s blog.

## Tweaking Speed

Type the following command in Console and press enter. You can use any other speed in place of **1000**.
>Runner.instance_.setSpeed(1000)

## Immortality
-   After every command press enter.
-   We store the original game over function in a variable:
```
var  original  =  Runner.prototype.gameOver
```
- Then, we make the game over function empty:
```
Runner.prototype.gameOver  =  function(){}
```
### Stopping the game after using Immortality
When you want to stop the game, Revert back to the original game over function:
```
Runner.prototype.gameOver = original
```
