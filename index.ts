import alfy from 'alfy';
import {run} from "@apple-jxa/node";

const configurations = await run(() => {
    let application = Application("Tunnelblick");
    application.includeStandardAdditions = true;
    const configurations = []
    application.configurations()
    const length = application.configurations().length
    for (let i = 0; i < length; i++) {
        const configuration = application.configurations.at(i);
        configurations.push({
            name: configuration.name(),
            state: configuration.state()
        });
    }
    return configurations
})
const items = configurations.map(i => ({
    title: i.name,
    icon: {
        path: `images/${i.state}.png`
    },
    uid: i.name,
    arg: i.name,
    autocomplete: i.name
}));
alfy.output(alfy.inputMatches(items, 'title'))
