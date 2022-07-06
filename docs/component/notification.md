<script setup>
import DUButton from '../../packages/components/button/src/Index.vue'
import { DUNotification } from '../../packages'
const onClick = () => {
  DUNotification({
    title: 'Notification Title!',
    content: 'Notification content.'
  })
}
</script>

# Notification 通知

### 单独引入
<br />

```ts
import { DUNotification } from 'doggy-ui'
```

### 基础使用
<br />

<DUButton @click="onClick" type="primary">Notification</DUButton>

```ts
const onClick = () => {
  DUNotification({
    title:'Notification Title!',
    content:'Notification content.'
  })
}
```

### DUNotification API
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| title | 标题 | string | - |
| content | 内容文本 | string | - |
| duration | 持续时间（毫秒） | number | 3000 |
