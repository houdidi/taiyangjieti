<template>
	<div id="select">
		<a @click="change">{{btnName}}</a>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"rsSelect",
		props: {
		    btnName: {
		      type: String
		    }
		},	
		data () {
			return {
			}
		},
		methods: {
			change () {
				this.$emit('click')
			}
		}
	}
</script>
<style type="text/css">
	a {
		width: 100px;
		height: 30px;
		border-radius: 10px;
		border: 1px solid #ccc;
		background: #ccc;
		display: inline-block;
		line-height: 30px;
		margin: 10px;
		cursor: pointer;
		color: #fff;
	}
	a:hover {
		background: rgba(255,255,255,0.2);
		color: black;
	}
</style>