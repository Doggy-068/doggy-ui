<script setup>
import { ref } from 'vue'
import DUCheckbox from '../../packages/components/checkbox/src/Index.vue'
const value = ref(false)
</script>

# Checkbox 多选框

### 尺寸
<br />

<DUCheckbox v-model="value" label="选项一" size="small" />
<DUCheckbox v-model="value" label="选项二" />
<DUCheckbox v-model="value" label="选项三" size="large" />
```vue
<DUCheckbox v-model="value" label="选项一" size="small" />
<DUCheckbox v-model="value" label="选项二" />
<DUCheckbox v-model="value" label="选项三" size="large" />
```

### Checkbox 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| modelValue / v-model | 绑定值 | boolean | - |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' &#124; | 'default' |
| label | 文本 | string | '' |
