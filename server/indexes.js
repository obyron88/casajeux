import { Index, MinimongoEngine } from 'meteor/easy:search';
// On Client and Server
var PlayersIndex = new Index({
    collection: Blanc,
    fields: ['name'],
    engine: new MinimongoEngine(),
});



