<script setup>
import { ref } from 'vue'
import DUInput from '../../packages/components/input/src/Index.vue'
const value = ref('')
</script>

# Input 输入框

### 尺寸
<br />

<div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 1rem">
  <DUInput v-model="value" size="small" />
  <DUInput v-model="value" />
  <DUInput v-model="value" size="large" />
</div>

```vue
<div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 1rem">
  <DUInput v-model="value" size="small" />
  <DUInput v-model="value" />
  <DUInput v-model="value" size="large" />
</div>
```

### 禁用
<br />

<DUInput disabled />
```vue
<DUInput disabled />
```

### Input 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| modelValue / v-model | 绑定值 | string | '' |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' &#124; | 'default' |
| disabled | 是否禁用 | boolean | false |
| placeholder | 原生 placeholder 属性 | string | '请输入' |
