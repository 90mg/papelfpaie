PeddlePublisherEmbedConfig = {
        publisherID: "4333109",
        target: null
    },
    function() {
        if ("function" != typeof window.PeddlePublisherEmbed) {
            if (!window.PeddlePublisherEmbedConfig || !window.PeddlePublisherEmbedConfig.publisherID) throw new Error("Unable to bootstrap Peddle Publisher Embed, make sure to set PeddlePublisherEmbedConfig.publisherID");
            const e = (d, i) => {
                e.queue.push({
                    operation: d,
                    options: i
                })
            };
            e.queue = [], window.PeddlePublisherEmbed = e;
            const d = () => {
                const e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https://publisher-embed.peddle.com/api/v1/embed/" + window.PeddlePublisherEmbedConfig.publisherID;
                const d = document.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(e, d)
            };
            window.addEventListener("load", d, !1)
        }
    }();
