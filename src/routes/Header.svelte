<script lang="ts">
</script>

<nav class="navbar">
    <div class="logo">
        <img src="/material-home.svg" alt="Logo" style="height: 40px; width: auto;" />
    </div>
    <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
    </ul>
    <div class="menu-icon">☰</div>
</nav>


<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        padding: 10px 20px;
    }

    .nav-links {
        display: flex; /* Make the list items display horizontally */
        list-style: none; /* Remove default list styling */
        padding: 0; /* Remove default padding */
        margin: 0; /* Remove default margin */
    }

    .nav-links li {
        color: white;
        text-decoration: none;
        margin: 0 10px; /* Add spacing between list items */
    }

    .menu-icon {
        color: white;
        cursor: pointer;
    }
</style>