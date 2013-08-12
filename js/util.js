define(function() {
    return {
        legalSetUrl: 'http://wizards.com/magic/magazine/article.aspx?x=judge/resources/sfrstandard',
        legalSetRegex: /^.*<li><em>(.*)<\/em>.*$/img,
        setImgUrl: {
            prefix: 'http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=',
            suffix: '&size=small&rarity=C'
        },
        sets: []
    }
});