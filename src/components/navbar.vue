<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center fixed-top">        
        <a class="navbar-brand text-white" href="#"> PF REST APPLICATION </a>    
        <!-- Toggler/collapsible button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dualCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar links -->
        <div class="collapse navbar-collapse dualCollapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link> 
                </li>
                <li class="nav-item"><router-link to="/about"  class="nav-link">About</router-link></li>
                <li class="nav-item"><router-link to="/search" class="nav-link">Search</router-link></li>
            </ul>
            <div class="justify-content-end navbar-collapse collapse dualCollapse">
                <ul class="navbar-nav">
                    <li>
                        <button class="btn btn-sm btn-outline-danger nav-link" @click="logmeout">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

    methods: {
        logmeout(){
            console.log("emitting logmeout event from navbar")
            this.$emit("logmeout");
        }
    }
}


</script>
