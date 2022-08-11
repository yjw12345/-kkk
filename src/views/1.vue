<template>
<showproperty1 :containerHeight="500" />
<!-- <property /> -->
</template>
<script setup>
import showproperty1 from '../components/showproperty1.vue';
import property from "@/components/property.vue";
import requestPost from "../utils/request.js"
console.log(requestPost);
requestPost.requestPost("api/data/webVital",{
    "userId": "aa7385b487e84f28a5e43e7574f4f0aa",
    "deviceId": "e20ca6dd21964f99a7d514bc4c1264e1"
},(res)=>{console.log(res);})
// console.log(requestPost.requestPost("api/data/webVital"));
</script>