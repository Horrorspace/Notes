export async function start() {
    console.log(`mode is: ${process.env.NODE_ENV}`);

    const PORT: number = Number(process.env.PORT) || 3000;

    console.log(`HTTP server has been started on port ${PORT}...`);
}

start();