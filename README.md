# Murphey Animation Library

Murphey Animation is a lightweight, open-source JavaScript animation library built using pure **JavaScript** and **CSS**, inspired by GSAP but simpler to use.  
It allows developers to create smooth animations with minimal code.

---

## 📦 Installation

You can use Murphey Animation in your project in several ways.

### 1. Using NPM
```bash
npm install murphey-animation
````

Then import in your JavaScript:

```javascript
import { murpheyAnimate } from "murphey-animation";
```

### 2. Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/murphey-animation/dist/murphey-animation.min.js"></script>
```

or from **cdnjs** (once published):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/murphey-animation/1.0.0/murphey-animation.min.js"></script>
```

---

## 🚀 Usage Example

### HTML

```html
<div id="box" style="width:100px; height:100px; background:red;"></div>
```

### JavaScript

```javascript
// Animate the box from left to right
murpheyAnimate("#box", {
    transform: "translateX(300px)",
    opacity: 0.5
}, 1000, "ease-in-out");
```

---

## ⚙️ API

### `murpheyAnimate(target, properties, duration, easing)`

| Parameter    | Type   | Description                                 |
| ------------ | ------ | ------------------------------------------- |
| `target`     | string | CSS selector of the element to animate      |
| `properties` | object | CSS properties to animate                   |
| `duration`   | number | Duration in milliseconds                    |
| `easing`     | string | CSS easing function (e.g., `"ease-in-out"`) |

---

## 📂 Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Murphey Animation Example</title>
<script src="murphey-animation.js"></script>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background:red;"></div>

    <script>
        murpheyAnimate("#box", {
            transform: "translateX(200px)",
            backgroundColor: "blue"
        }, 1500, "ease-in-out");
    </script>
</body>
</html>
```

---

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:

   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request

---

## 🌐 Links

* **GitHub Repository:** *\[To be added after publishing]*
* **NPM Package:** *\[To be added after publishing]*
* **CDNJS Link:** *\[To be added after publishing]*

---

```



