<template>
<div class="container-fluid" style="margin-top:60px;">
    <div class="well well-sm">
			<div class="row">				
			   <div class="col-sm-4"></div>
			   <div class="col-sm-5">
				  <div class="input-group">
					 <input type="text" id="itemtosearch" class="form-control" placeholder="Search item(s)" title="Item search" value=""
						data-toggle="popover" data-placement="left" data-trigger="hover"
						data-content="Enter comma separated values for multiple items" autofocus>
					 <div class="input-group-btn">
						<button type="button" id="itemSearchbtn" class="btn btn-info" >
						<span class="glyphicon glyphicon-search"></span> Search</button>
					 </div>
				  </div>
			   </div>
			   <div class="col-sm-3"></div>
			</div>
	</div>
</div>
</template>

<script>
export default {
    data(){
		return {}
	}
}
</script>
