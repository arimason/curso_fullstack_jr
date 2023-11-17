// switch case

function teste(key) {
    switch (key) {
        case `ari`:
            console.log(`ari`)
            break; // sem o break, o bloco seguinte do CASE será processado
        case `123`:
            console.log(`123`)
            break;
    
        default: // caso nao entre em nenhum outro bloco de CASE cairá no DEFAULT e executará o bloco
            console.log(`default`)
            break;
    }
}

teste(`ari`)