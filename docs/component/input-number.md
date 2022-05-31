<script setup>
import { ref } from 'vue'
import DUInputNumber from '../../packages/components/input-number/src/Index.vue'
const value = ref(0)
</script>

# Input Number 数字输入框

### 尺寸
<br />

<div style="display: flex; flex-wrap: wrap">
  <DUInputNumber v-model="value" size="small" style="margin-right: 1rem" />
  <DUInputNumber v-model="value" style="margin-right: 1rem" />
  <DUInputNumber v-model="value" size="large" />
</div>

```vue
<div style="display: flex; flex-wrap: wrap">
  <DUInputNumber v-model="value" size="small" style="margin-right: 1rem" />
  <DUInputNumber v-model="value" style="margin-right: 1rem" />
  <DUInputNumber v-model="value" size="large" />
</div>
```

### 禁用
<br />

<DUInputNumber :modelValue="0" disabled />

```vue
<DUInputNumber :modelValue="0" disabled />
```

### Input Number 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| modelValue / v-model | 绑定值 | number | - |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' &#124; | 'default' |
| disabled | 是否禁用 | boolean | false |
| min | 最小值 | number | -Infinity |
| max | 最大值 | number | Infinity |
