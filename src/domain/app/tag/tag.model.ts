import {TagEntity} from "@persistence/app/tag/tag.entity";
import CreatorModel from "@domain/app/tag/creator.model";

export default class TagModel {
    private id: number;
    private creator: CreatorModel;
    private name: string;
    private sortOrder: number;

    set Id(value: number) { this.id = value; }
    get Id(): number { return this.id; }

    set Creator(value: CreatorModel) { this.creator = value; }
    get Creator(): CreatorModel { return this.creator; }

    set Name(value: string) { this.name = value; }
    get Name(): string { return this.name; }

    set SortOrder(value: number) { this.sortOrder = value; }
    get SortOrder(): number { return this.sortOrder; }

    static toModel(tag: TagEntity) {
        const model = new TagModel();
        model.Id = tag.id;
        model.Creator = CreatorModel.toModel(tag.user);
        model.Name = tag.name;
        model.SortOrder = tag.sortOrder;

        return model;
    }
}