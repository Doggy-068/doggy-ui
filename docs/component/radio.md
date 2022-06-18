<script setup>
import { ref } from 'vue'
import DURadio from '../../packages/components/radio/src/Index.vue'
const value = ref('')
const options = ref([
  { label: '选项一', value: '选项一' },
  { label: '选项二', value: '选项二' },
  { label: '选项三', value: '选项三' }
])
</script>

# Radio 单选框

### 尺寸
<br />

<DURadio v-model="value" :options="options" />
```vue
<DURadio v-model="value" :options="options" />
```

### Radio 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| modelValue / v-model | 绑定值 | string | - |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' &#124; | 'default' |
| options | 选项 | { label: string, value: string }[] | - |
