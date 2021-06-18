import React from 'react';
import Header from '../components/Header';
import '../styles/style-pages/purchase-register.css';

function PurchaseRegister(){
    return(
        <div className='container-general'>
            <div className='container-header'>
                <Header />
            </div>
            <div className='container-body'>
                <div className='sale-progress'>
                </div>
                <div className="content-main">
                    <div className='container-content-input'>
                        <div className='title-content-top'>
                            <span className="title-top">Detalhes da entrega</span>
                        </div>  

                        <div className='group-input'>
                            <div className="group-label-input">
                                <label className="label-up-input">Nome<span className="asterisk-required">*</span></label>
                                <input className="input-default" name="" placeholder="Digite seu nome" id="" />
                            </div>
                            <spans className="space"></spans>
                            <div className="group-label-input">
                                <label className="label-up-input">Sobrenome<span className="asterisk-required">*</span></label>
                                <input className="input-default" name="" placeholder="Digite seu sobrenome" id="" />
                            </div>
                        </div> 
                        <div className='andress-delivery-input'>
                            <span className="label-up-input">País</span>
                            <span className="value-property">Brasil</span>
                            
                            <label className="label-up-input">Endereço<span className="asterisk-required">*</span></label>
                            <input className="input-default" name="" placeholder="Ex: Rua das Flores, N° 2000" id="" />
                            
                            <label className="label-up-input">Apartamento, quadra, unidade, etc.. (opcional)</label>
                            <input className="input-default" name="" placeholder="Digite um complemento" id="" />
                            
                            <label className="label-up-input">Cidade<span className="asterisk-required">*</span></label>
                            <input className="input-default" name="" placeholder="Ex: Nome da cidade da entrega" id="" />
                            
                            <label className="label-up-input">Estado<span className="asterisk-required">*</span></label>
                            <input className="input-default" name="" placeholder="Ex: Nome do estado da entrega" id="" />
                            
                            <label className="label-up-input">CEP<span className="asterisk-required">*</span></label>
                            <input className="input-default" name="" placeholder=" 00000-000" id="" />

                            <div className='group-input'>
                                <div className="group-label-input">
                                    <label className="label-up-input">Telefone<span className="asterisk-required">*</span></label>
                                    <input className="input-default" name="" placeholder="(DDD) xxxxx-xxxx" id="" />
                                </div>
                                <spans className="space"></spans>
                                <div className="group-label-input">
                                    <label className="label-up-input">E-mail<span className="asterisk-required">*</span></label>
                                    <input className="input-default" name="" placeholder="Ex: meumelhoremail@host.com" id="" />
                                </div>
                            </div> 
                            <div className='area-textarea'>
                                <label className="label-up-input">Alguma ressalva importante (opcional)</label>
                                <textarea className="textarea-default" name="" placeholder="Ex: Traga meu super produto em segurança" id="" />
                            </div> 
                            
                        </div>             
                    </div>

                    <div className='sales-note-complet'>
                        <div className='title-note-top'>
                            <span className="title-note">Nota da compra</span>
                        </div> 
                        <div className='group-fields'>
                            <span className="span-atribute-top">Produtos</span>
                            <span className="span-atribute-top">Valores</span>
                        </div>
                        <div className="container-content-note">
                            <div className='group-products'>
                                <span className="span-atribute-product">Pó de Banana</span>
                                <span className="span-value-product">R$ 7.50</span>
                            </div> 
                        </div>
                        <div className='group-fields'>
                            <span className="span-atribute">Subtotal</span>
                            <span className="span-value-subtotal">R$ 22.50</span>
                        </div> 

                        <div className='group-fields-delivery'>
                            <span className="span-atribute">Entrega</span>
                            <span className="span-value-delivery">Digite seu local de entrega</span>
                        </div> 
                        <div className='group-fields-total'>
                            <span className="span-atribute-total">Total</span>
                            <span className="span-value-total">R$ 30.00</span>
                        </div> 
                        <div className="area-button">
                            <button className="button-default">Concluir Compra</button>
                        </div>
                    </div>

                </div>
                
            </div>
            <div className='container-footer'></div>
        </div>
    );
}


export default PurchaseRegister;