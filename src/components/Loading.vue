<template>
    <div class="loading-box">
             <Spin></Spin>
             <div class="mask"></div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    .loading-box{
        position: fixed;
        top:50%;
        left:50%;
    }
    .mask{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.4);
    }
</style>
