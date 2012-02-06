
app.rulesPanel = new Ext.Panel({
    fullscreen: true,
    styleHtmlContent: true,
    fullscreen: true,
    style: 'background-color: #e6e5dc;',
    html: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li><li>Vestibulum auctor dapibus neque.</li></ul>',        
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: 'Safety & Rules',
        items: [{
                ui: 'back',
                text: 'Home',
                handler: function () {
                app.views.viewport.setActiveItem(0, { type: 'slide', direction: 'right' });
            }
        }]
    }]
});
