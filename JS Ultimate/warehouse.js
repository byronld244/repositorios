frappe.ui.form.on('Warehouse', {
    refresh: function(frm) {

    }
});

cur_frm.cscript.warehouse_type=function(){
    setValues()
}

function setValues() {
    if (cur_frm.doc.warehouse_type === 'Showroom') {
        cur_frm.set_df_property('brand', 'reqd', true);
    } else {
        cur_frm.set_df_property('brand', 'reqd', false);
        cur_frm.set_value('brand', '');
        cur_frm.refresh_field('brand');
    }
}
