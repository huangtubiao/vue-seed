# Sass 规范

> Sass 这样描述自己：Sass 是 CSS 的一个扩展，它使 CSS 的使用起来更加优雅和强大。

然而 Sass 带给我们优雅和强大的同时也给我们带来了烦恼。关于 Sass 预处理器的具体优点，官方说得很清楚了，相信你们也感受到了，对吧？我就不赘述了，我们来一起说说缺点吧。

- *嵌套带来的副作用*：CSS选择符权重增加，HTML结构与样式挂钩耦合，以及预处理器层面需要增加规范（变量和mix模块放在什么地方定义、文件如何拆解以配合@import导入、什么时候定义新的class名、什么时候使用嵌套），以方便团队合作。

- *生成冗余的代码*：使用 **混合宏** 的时候，编译出来的 CSS 清晰告诉了大家，他不会自动合并相同的样式代码，如果在样式文件中调用同一个混合宏，会产生多个对应的样式代码，造成代码的冗余，这也是 CSSer 无法忍受的一件事情。对于 **继承**，如果是基类并不存在于HTML结构时，不管调用与不调用，在编译出来的 CSS 中都将产生基类对应的样式代码。

- *增加一定的学习成本和团队维护成本以及需要制定规范*：引入预处理器之后，如果没有规范好必然会增加代码上的混乱和后期维护上的困难，规范的制定要多考虑很多东西了，很考验能力。如果规范没制定好，团队合作时如何保证最大化的复用性、避免冲突、模块粒度拆解与文件目录结构设计都会是挑战。加上历史遗留问题，情况就更复杂了。

针对以上的考虑，我们制定了如下的规范：

## 文件

### [建议] CSS 文件使用无 BOM 的 UTF-8 编码。

解释：

UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。


## 缩进

### [强制] 使用 `4` 个空格做为一个缩进层级，不允许使用 `2` 个空格 或 `tab` 字符。

```
.btn {
    position: relative;
    top: 0px;
    display: block;
    height: 40px;
    width: 80px;
}
```


## 空格

### [强制] `选择器` 与 `{` 之间必须包含空格。

示例：

```
.selector {
}
```

### [强制] `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含空格。

```
margin: 0;
```

### [强制] `列表型属性值` 书写在单行时，`,` 后必须跟一个空格。

示例：

```
font-family: Arial, sans-serif;
```


## 变量、混合宏、扩展/继承、占位符

变量、混合宏、扩展/继承、占位符给予了 CSS 具有 js 的能力，让我们书写 CSS 更加灵活，但是，我们也要知道这些所谓的能力其实 CSS 也有对应的替代方案 —— 让HTML标签挂多个class：

Sass 变量方案：
```
$heightLight: red;
.title {
    color: $heightLight;
    font-size: 20px;
}
.title2 {
    color: $heightLight;
    font-size: 16px;
}
<h1 class="title"></h1>
<h2 class="title2"></h2>
```

多 class 方案：
```
.height-light: {
    color: red;
};
.title {
    font-size: 20px;
}
.title2 {
    font-size: 20px;
}
<h1 class="title height-light"></h1>
<h2 class="title2 height-light"></h2>
```

Sass 继承方案：
```
.message {
    display: block;
    color: red;
}
.success {
    @extend .message;
    border-color: #fff;
}
.error {
    @extend .message;
    border-color: red;
}
<div class="success">成功</div>
<div class="error">失败</div>
```

多 class 方案：
```
.message {
    display: block;
    color: red;
}
.success {
    border-color: green;
}
.error {
    border-color: red;
}
<div class="message success">成功</div>
<div class="message error">失败</div>
```

那么什么时候该使用变量、混合宏、扩展/继承、占位符呢？

a)*混合宏*：如果你的代码块中涉及到变量，建议使用混合宏来创建相同的代码块。
b)*扩展/继承*：如果你的代码块不需要专任何变量参数，而且有一个基类已在文件中存在，那么建议使用 Sass 的继承。
c)*占位符*：占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中。

## 选择器嵌套

嵌套的副作用以及低成本的替换方案 —— 长命名

嵌套会带来HTML结构与CSS选择符耦合、选择符权重增加的副作用，而短命名会带来易冲突的问题，如果代码一旦进行修改，耦合就会带来不必要的麻烦，而CSS作为层叠样式表，选择符的权重直接决定了当不同的选择符样式出现冲突时，使用哪个选择符定义的样式。Sass预处理器看似提供了作用域，其实只是个障眼法，编译出来的结果，只是普通的子孙选择器而已。如果依赖预处理器的这种错觉，采用短命名的话，当多人合作或采用低质量的第三方代码时，很可能会产生冲突。你能保证自己不直接使用短命名，一定会嵌套着使用，但无法保证别人不直接在全局使用短命名。

Sass嵌套方案：
```
.box {
    .header {}
    .body {}
    .footer {}
}
<div class="box">
    <div class="header">header</div>
    <div class="body">body</div>
    <div class="footer">footer</div>
</div>
```

长命名方案：
```
.box {}
.box_header {}
.box_body {}
.box_footer {}
<div class="box">
    <div class="box_header">header</div>
    <div class="box_body">body</div>
    <div class="box_footer">footer</div>
</div>
```

那么什么时候该用嵌套呢？

a)嵌套伪类和伪元素是被允许，也是受推荐的：
```
.foo {
    color: red;
    &:hover {
        color: green;
    }
    &::before {
        content: 'pseudo-element';
    }
}
```
b)使用类似 .is-active 类名来控制当前选择器状态，也可以这样使用选择器嵌套：
``` python
.foo {
    &.is-active {
        font-weight: bold;
    }
}
```
c)当一个元素的样式在另一个容器中有其他指定的样式时，可以使用嵌套选择器让他们保持在同一个地方：
```
.foo {
    .no-opacity & {
        display: none;
    }
}
```

如果你真的很喜欢嵌套，那我就建议嵌套不要超过三层。

## 命名约定

我个人坚持的风格：
- 文件：小写连字符分隔，有意义的命名；
- 文件夹：小写，下划线分隔。

## 组件

作为一名前端开发人员，我们都有这样的体会，使用的 CSS 越少，工作会越愉快，没人想处理兆字节量的 CSS 代码，因此保持样式表简短而高效，就不会有诸多诡异。将接口视为组件的集合来使用往往是非常棒的思维。

那么什么叫做组件呢？应该要遵循什么样的规范呢？

- 可以做一件事，只做一件；
- 在整个项目中可以重用，具有可复用性；
- 各自独立。

用 Sass 去写组件，是一个怎么样的结构呢？

- 组件本身的样式；
- 和组件样式有关的变量、修饰器以及状态；
- 如有需要，设置组件的子级样式。

下面是一个 Button 组件的示例：
```
// Button-specific variables
$button-color: $secondary-color;

// … include any button-specific:
// - mixins
// - placeholders
// - functions

/**
 * Buttons
 */
.button {
    @include vertical-rhythm;
    display: block;
    padding: 1rem;
    color: $button-color;
    // … etc.

    /**
     * Inlined buttons on large screens
     */
    @include respond-to('medium') {
        display: inline-block;
    }
}

/**
 * Icons within buttons
 */
.button > svg {
    fill: currentcolor;
    // … etc.
}
```

## 文件目录结构设计

```
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   …                     # Etc.
|
|– pages/
|   |– home.scss          # Home specific styles
|   |– contact.scss       # Contact specific styles
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
``` 

## 注释

在Sass写注释主要有两种注释：  
- 单行注释: 
``` python
// 这是注释
``` 
> 使用这种注释是不会被编译出来的。

- C 风格注释 :
``` python
/**
 * 这是注释
 */
```
> 使用这种注释会被编译出来的。

那么怎么去注释呢？个人觉得，没有硬性要求，但要写有意义的注释，建议去找找三个月之前的代码看看，心里就知道怎么去写注释了。

# Ref

- [编写稳健、可维护和可扩展的 Sass](https://sass-guidelin.es/zh/)
