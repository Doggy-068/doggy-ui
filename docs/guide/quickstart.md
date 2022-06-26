# 快速开始

### 用法
```typescript
import { createApp } from 'vue'
import DoggyUI from 'doggy-ui'
import 'doggy-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(DoggyUI.plugin)
app.mount('#app')
```
