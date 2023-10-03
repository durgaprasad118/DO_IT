- Important Notes

```js
onClick((e) => {
  setTask(e.target.value)
  // here if you use task it updates older value
  handle(e.target.value)
})
```

2. while using useState("default value from backend")
3. while passing function to children so if child clicks it should activate then

```js
onClick(() => handle())
```
