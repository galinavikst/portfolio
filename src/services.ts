const makeWebHook = 'https://hook.eu1.make.com/8hq0eqo257bwcanq823whsynrtupoepk';

export const sendFormToAgent = async (formData: any) => {
    return fetch(makeWebHook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...formData,
            createdAt: new Date().toISOString(),
        }),
    });
};
