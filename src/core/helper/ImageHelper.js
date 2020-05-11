import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {

    const imageUrl = product
        ? `${API}/product/photo/${product._id}`
        : `https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b3/49/b349d9e57192a24357906baa2ac8d29ef255eb98.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`

    return (
        <div className="rounded border border-success p-2">
            <img
                src={imageUrl}
                alt="photo"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    )
};

export default ImageHelper;
