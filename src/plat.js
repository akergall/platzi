export default function plat(str)
{
    let translation = str;

    if(str.toLowerCase().endsWith('ar'))
    {
        translation = str.slice(0, -2);
    }
    if(str.toLowerCase().startsWith('z'))
    {
        translation+='pe';
    }

    const length = translation.length;
    if(length>=10)
    {
        const primera = translation.slice(0, Math.round(length/2));
        const segunda =  translation.slice(Math.round(length/2));

        translation = `${primera}-${segunda}`;
    }
    const reverse=(str)=>str.split('').reverse().join('');
    function minMay(str)
    {
        const length=str.length;
        let translation = '';
        let capitalze=true;

        for(let i = 0; i<length;i++)
        {
            const char = str.charAt(i);
            translation+=capitalze?char.toUpperCase():char.toLowerCase();
           capitalze = !capitalze;
        }
        return translation;
    }
    if(str==reverse(str))
    {
        return minMay(str);
    }

    return translation;
}

