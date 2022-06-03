<script setup>
import DUTag from '../../packages/components/tag/src/Index.vue'
</script>

# Tag 标签

### 类型
<br />

<DUTag>Primary</DUtag>
<DUTag type="success">Success</DUtag>
<DUTag type="info">Info</DUtag>
<DUTag type="warning">warning</DUtag>
<DUTag type="danger">Danger</DUtag>
```vue
<DUTag>Primary</DUtag>
<DUTag type="success">Success</DUtag>
<DUTag type="info">Info</DUtag>
<DUTag type="warning">warning</DUtag>
<DUTag type="danger">Danger</DUtag>
```

### 尺寸
<br />

<div style="display: flex">
  <DUTag size="small">Small</DUtag>
  <DUTag size="default">Default</DUtag>
  <DUTag size="large">Large</DUtag>
</div>

```vue
<div style="display: flex">
  <DUTag size="small">Small</DUtag>
  <DUTag size="default">Default</DUtag>
  <DUTag size="large">Large</DUtag>
</div>
```

### 圆角
<br />

<DUTag round>Round</DUTag>
```vue
<DUTag round>Round</DUTag>
```

### Tag 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| type | 类型 | 'primary' &#124; 'success' &#124; 'info' &#124; 'warning' &#124; 'danger' | 'primary' |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' | 'default' |
| round | 是否为圆角标签 | boolean | false |

### Tag 插槽
<br />

| 插槽名 | 说明 |
|:------|:-----|
| default | 默认内容 |
