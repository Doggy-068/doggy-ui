<script setup>
import DUIcon from '../../packages/components/icon/src/Index.vue'
import { Minus, Plus, Select } from '../../packages/components/icon/src/components'
const icons = [Minus, Plus, Select]
</script>

# Icon 图标

### 结合 DUIcon 使用
<br />

<DUIcon :size="32" color="#409EFF">
  <Select />
</DUIcon>

```vue
<DUIcon :size="32" color="#409EFF">
  <Select />
</DUIcon>
```

### 图标集合
<br />

<div style="background: #dcdfe6; border: 1px solid #dcdfe6; display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px">
  <div v-for="(item, index) of icons" :key="index" style="display: flex; flex-direction: column; align-items: center; background: #fff; font-size: 14px; padding: 10px 0">
    <DUIcon :size="20">
      <component :is="item" />
    </DUIcon>
    <span style="margin-top: 5px">{{ item.name }}</span>
  </div>
</div>

### Icon 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| size | 尺寸 | number | - |
| color | 颜色 | string | - |
