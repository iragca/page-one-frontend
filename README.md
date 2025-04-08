<h1 align="center">Page One Frontend</h1> 

## Tech Stack

- [Svelte](https://svelte.dev/): Tutorials -> https://svelte.dev/tutorial/svelte
- [Backend Server](https://github.com/iragca/page-one)
    - Express
    - MongoDB

## Development


> [!IMPORTANT]
> Required stuff
> - Docker
> - .env file with the BACKEND_API_URL 


Start the [backend](https://github.com/iragca/page-one) using Docker. 
You must have Docker [installed](https://docs.docker.com/engine/install/) for this.

Compose up
```bash
npm run start_backend
```

Compose down
```bash
npm run stop_backend
```

Running the frontend server.

Not recommended to do in Windows Subsystem for Linux (WSL).

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```


## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
