class Animal {
    // Вызывается через Animal.type
    static type = "ANIMAL"
    constructor(options) {
        // Вызывается animal
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
        this.color = options.color
    }
    voice() {
        // Вызывается animal.voice(), он находится в prototype класса animal
        return `I am ${this.name}`
    }
}

const animal = new Animal({
    name: "Animal",
    age: 0,
    hasTail: false
})

// Создает копию animal но со своими данными
class Cat extends Animal {
    static cat = "CAT"
    constructor(options) {
        // Сперва нужно вызвать родительский constructor
        super(options);
        this.color = options.color
    }
    // Обычнные запросы getter и setter
    get ageInfo() {
        return this.age * 4
    }
    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: "Cat",
    age: 5,
    hasTail: true,
    color: "orange"
})

class Component {
    constructor(selector) {
        // Через $ указвается document
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = "none"
    }
    show() {
        this.$el.style.display = "block"
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + "px"
        this.$el.style.background = options.color
    }
}

const box = new Box({
    selector: "#box",
    size: 100,
    color: "black"
})

const con = new Box({
    selector: "#con",
    size: 100,
    color: "red"
})

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = options.borderRadius
    }
}

const circle = new Circle({
    selector: "#circle",
    size: 100,
    color: "black",
    borderRadius: "50%"
})