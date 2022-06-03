<script setup>
import { ref } from 'vue'
import DUProgress from '../../packages/components/progress/src/Index.vue'
const percentage = ref(60)
</script>

# Progress 进度条

### 颜色
<br />

<DUProgress :percentage="percentage" style="margin-bottom: 1rem" />
<DUProgress :percentage="percentage" color="#67C23A" style="margin-bottom: 1rem" />
<DUProgress :percentage="percentage" color="#E6A23C" style="margin-bottom: 1rem" />
<DUProgress :percentage="percentage" color="#F56C6C" />
```vue
<DUProgress :percentage="percentage" style="margin-bottom: 1rem" />
<DUProgress :percentage="percentage" color="#67C23A" style="margin-bottom: 1rem" />
<DUProgress :percentage="percentage" color="#E6A23C" style="margin-bottom: 1rem" />
<DUProgress :percentage="percentage" color="#F56C6C" />
```

### Progress 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| width | 组件宽度 | string | '300px' |
| barWidth | 进度条宽度 | number | 6 |
| percentage | 百分比 | number | - |
| color | 进度条颜色 | string | 'var(--du-primary-color)' |
