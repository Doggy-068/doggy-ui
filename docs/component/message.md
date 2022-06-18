<script setup>
import DUButton from '../../packages/components/button/src/Index.vue'
import { DUMessage } from '../../packages'
const onClick = () => {
  DUMessage({
    type: 'primary',
    message: '这是一条消息'
  })
}
</script>

# Message 消息

### 类型
<br />

<DUButton type="primary" @click="onClick">Message</DUButton>

```ts
const onClick = () => {
  DUMessage({
    type: 'primary',
    message: '这是一条消息'
  })
}
```

### Message API
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| type | 类型 | 'primary' &#124; 'success' &#124; 'info' &#124; 'warning' &#124; 'danger' | - |
| duration | 持续时间（毫秒） | number | 3000 |
| message | 消息文本 | string | - |
