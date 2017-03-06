/**
 * Created by dak on 2/28/2017.
 */

export class Cake {
    id: string;
    name: string;
    comment: string;
    imageUrl: string;
    yumFactor: number;

    static from(r:any): Cake {
        let cake = <Cake>({
            id: r.id,
            name: r.name,
            comment: r.comment,
            imageUrl: r.imageUrl,
            yumFactor: r.yumFactor,
        });
        return cake;
    }
}

