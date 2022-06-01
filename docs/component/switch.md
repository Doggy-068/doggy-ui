<script setup>
import { ref } from 'vue'
import DUSwitch from '../../packages/components/switch/src/Index.vue'
const value = ref(false)
</script>

# Switch 开关

### 尺寸
<br />

<div style="display: flex; flex-wrap: wrap">
  <DUSwitch v-model="value" size="small" style="margin-right: 1rem" />
  <DUSwitch v-model="value" on-color="#67C23A" style="margin-right: 1rem" />
  <DUSwitch v-model="value" on-color="#E6A23C" size="large" />
</div>

```vue
<div style="display: flex; flex-wrap: wrap">
  <DUSwitch v-model="value" size="small" style="margin-right: 1rem" />
  <DUSwitch v-model="value" on-color="#67C23A" style="margin-right: 1rem" />
  <DUSwitch v-model="value" on-color="#E6A23C" size="large" />
</div>
```

### 禁用
<br />

<DUSwitch :modelValue="false" size="small" disabled />
```vue
<DUSwitch :modelValue="false" size="small" disabled />
```

### Switch 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| modelValue / v-model | 绑定值 | boolean | - |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' &#124; | 'default' |
| disabled | 是否禁用 | boolean | false |
| on-color | 状态为 on 时的颜色 | string | 'var(--du-primary-color)' |
| off-color | 状态为 off 时的颜色 | string | 'var(--du-fill-color-dark-2)' |
