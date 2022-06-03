<script setup>
import DUButton from '../../packages/components/button/src/Index.vue'

const onClick=()=>{
  console.log('okk')
}
</script>

# Button 按钮

### 类型
<br />

<DUButton type="primary">Primary</DUButton>
<DUButton type="success">Success</DUButton>
<DUButton type="info">Info</DUButton>
<DUButton type="warning">Warning</DUButton>
<DUButton type="danger">Danger</DUButton>
```vue
<DUButton type="primary">Primary</DUButton>
<DUButton type="success">Success</DUButton>
<DUButton type="info">Info</DUButton>
<DUButton type="warning">Warning</DUButton>
<DUButton type="danger">Danger</DUButton>
```

### 圆角
<br />

<DUButton type="primary" round>Primary</DUButton>
<DUButton type="success" round>Success</DUButton>
<DUButton type="info" round>Info</DUButton>
<DUButton type="warning" round>Warning</DUButton>
<DUButton type="danger" round>Danger</DUButton>
```vue
<DUButton type="primary" round>Primary</DUButton>
<DUButton type="success" round>Success</DUButton>
<DUButton type="info" round>Info</DUButton>
<DUButton type="warning" round>Warning</DUButton>
<DUButton type="danger" round>Danger</DUButton>
```

### 尺寸
<br />

<div style="display: flex; flex-wrap: wrap">
  <DUButton size="small">Small</DUButton>
  <DUButton size="default">Default</DUButton>
  <DUButton size="large">Large</DUButton>
</div>

```vue
<div style="display: flex; flex-wrap: wrap">
  <DUButton size="small">Small</DUButton>
  <DUButton size="default">Default</DUButton>
  <DUButton size="large">Large</DUButton>
</div>
```

### 禁用
<br />

<DUButton disabled>Disabled</DUButton>
```vue
<DUButton disabled>Disabled</DUButton>
```

### Button 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| type | 类型 | 'primary' &#124; 'success' &#124; 'info' &#124; 'warning' &#124; 'danger' | 'primary' |
| round | 是否为圆角按钮 | boolean | false |
| size | 尺寸 | 'small' &#124; 'default' &#124; 'large' &#124; | 'default' |
| disabled | 是否禁用 | boolean | false |

### Button 事件
<br />

| 事件名称 | 说明 | 回调参数 |
|:--------|:-----|:--------|
| click | 点击按钮 | - |

### Button 插槽
<br />

| 插槽名 | 说明 |
|:------|:-----|
| default | 默认内容 |
