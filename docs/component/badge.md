<script setup>
import DUBadge from '../../packages/components/badge/src/Index.vue'
import DUButton from '../../packages/components/button/src/Index.vue'
</script>

# Badge 徽章

### 类型
<br />

<div style="display: flex; flex-wrap: wrap">
  <DUBadge value="99+" style="margin-right: 3rem">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="success" style="margin-right: 3rem">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="info" style="margin-right: 3rem">
    <DUButton>Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="warning" style="margin-right: 3rem">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="danger">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
</div>

```vue
<div style="display: flex; flex-wrap: wrap">
  <DUBadge value="99+" style="margin-right: 3rem">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="success" style="margin-right: 3rem">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="info" style="margin-right: 3rem">
    <DUButton>Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="warning" style="margin-right: 3rem">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
  <DUBadge value="99+" type="danger">
    <DUButton type="info">Click</DUButton>
  </DUBadge>
</div>
```

### Badge 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| value | 显示值 | string | '' |
| type | 类型 | 'primary' &#124; 'success' &#124; 'info' &#124; 'warning' &#124; 'danger' | 'primary' |

### Badge 插槽
<br />

| 插槽名 | 说明 |
|:------|:-----|
| default | 默认内容 |
