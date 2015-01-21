/* global Meteor, Customers, SimpleSchema */
Bars = new Meteor.Collection('bars');
Styles = new Meteor.Collection('styles');

Indirizzo = new SimpleSchema({
  via: {
    type: String,
    label: "Via"
  },
  numero: {
    type: Number,
    label: "Civico"
  },
  citta: {
    type: String,
    label: "Citta"
  }
});

Styles.attachSchema(new SimpleSchema({
  nome: {
    type: String,
    label: "Nome stile"
  },
  descrizione: {
    type: String,
    label: "Descrizione stile"
  },
  img : {
    type: String,
    label: "Immagine di esempio"
  }
}));
Bars.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Nome Locale'
  },
  description: {
    type: String,
    label:'Descrizione',
    optional:true,
    autoform: {
      rows:3
    }
  },
  indirizzo:{
    type: Indirizzo,
    label:'Indirizzo',
    optional:true
  },
  style: {
    type: String,
    label: 'Stile',
    autoform: {
      options: function(){
        var styles =  Styles.find();
        return styles.map(function(e){
          return { label: e.nome, value: e._id };
        });
      }
    }
  }
}));

Meteor.methods({
  styleNew: function(style){
    // TODO controllo admin
      var styleId = Styles.insert(style);
      console.log(styleId);
    return styleId;
  }
});
