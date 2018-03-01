
export class Cost {
    constructor ( d ) {
        this.group_name = '';   // 费用名称
        this.money_desc = '';   // 备注信息
        this.group_money = '';   // 费用金额 ,元/人
        this.type = 1;
        this.form_id = Math.random() + "Cost";
        if ( d ) {
            let data = JSON.parse( JSON.stringify( d ) );
            if ( !data.group_name || typeof data.group_name !== 'string' ) {
                _log_( '费用名称异常', 'warn' );
                data.group_name = '[未知收费项]';
            }
            if ( isNaN( data.group_money ) || data.group_money < 0 ) {
                _log_( '费用金额异常', 'warn' );
                data.group_money = '';
            }
            if ( typeof data.money_desc !== 'string' ) {
                data.money_desc = '';
            }
            this.group_name = data.group_name;      // 费用名称
            this.money_desc = data.money_desc;      // 备注信息
            this.group_money = data.group_money;    // 费用金额 ,元/人
        }
    }
}
function _log_( str, type="log" ) {
    switch ( type ) {
        case 'error':
            console.error( `[competition] ${ str }`)
            break;
        case 'warn':
            console.warn( `[competition] ${ str }`)
            break;
        default:
            console.log( `[competition] ${ str }`)
            break;
    }
}

