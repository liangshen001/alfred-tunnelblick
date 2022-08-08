import {run} from "@apple-jxa/node";
import alfred from "@liangshen/alfred";

const configurations = await run(() => {
    let application = Application("Tunnelblick");
    application.includeStandardAdditions = true;
    const configurations = []
    const length = application.configurations().length
    for (let i = 0; i < length; i++) {
        const configuration = application.configurations.at(i);
        configurations.push({
            name: configuration.name(),
            state: configuration.state()
        });
    }
    return configurations;
    // 不支持
    // return application.configurations().map(i => ({
    //     name: i.name(),
    //     state: i.state()
    // }))
});
const items = configurations.map(i => ({
    title: i.name,
    icon: {
        path: `images/${i.state === 'EXITING' ? 'EXITING' : 'CONNECTED'}.png`
    },
    uid: i.name,
    arg: i.name,
    autocomplete: i.name
}));
alfred.output({items}, ['title']);
