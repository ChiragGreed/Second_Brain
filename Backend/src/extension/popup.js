document.getElementById("saveBtn").onclick = async () => {

    const existingCollection =
        document
            .getElementById("existingCollection")
            .value
            .trim()

    const newCollection =
        document
            .getElementById("newCollection")
            .value
            .trim()

    const message =
        document.getElementById("message")

    message.innerText = ""


    if (existingCollection && newCollection) {

        message.innerText =
            "Use only one field"

        return

    }


    const [tab] = await chrome.tabs.query({

        active: true,
        currentWindow: true

    })


    const result = await chrome.scripting.executeScript({

        target: { tabId: tab.id },

        func: () => {

            const selectedText = window.getSelection().toString()

            return {

                title: document.title.slice(0,60),

                content: selectedText || document.body.innerText.slice(0, 2000),

                url: window.location.href

            }

        }

    })


    const data = result[0].result



    const res =
        await fetch("http://localhost:9000/api/items/save",
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    ...data,

                    existingCollection,

                    newCollection

                })

            }

        )


    const resultMsg = await res.json()


    message.innerText =
        resultMsg.message
        || resultMsg.error

}