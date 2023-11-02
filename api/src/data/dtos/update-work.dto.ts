import { Types } from 'mongoose'

export class UpdateWorkDto {
  constructor (
    public provider: Types.ObjectId | undefined,
    public typeService: string | undefined,
    public experienceYears?: number | undefined,
    public name?: string | undefined,
    public category?: string | undefined,
    public quantity?: number | undefined,
    public currency?: string | undefined,
    public isActive?: boolean | undefined,
    public located?: string | undefined,
    public unitAmount?: number | undefined,
    public images?: string | undefined,
    public description?: string | undefined,
    public availabilityStatus?: string | undefined
  ) {}

  static create (object: Partial<UpdateWorkDto>): [string?, UpdateWorkDto?] {
    const {
      provider,
      typeService,
      experienceYears,
      name,
      category,
      quantity,
      currency,
      isActive,
      located,
      unitAmount,
      images,
      description,
      availabilityStatus
    } = object

    return [undefined, new UpdateWorkDto(
      provider,
      typeService,
      experienceYears,
      name,
      category,
      quantity,
      currency,
      isActive,
      located,
      unitAmount,
      images,
      description,
      availabilityStatus
    )]
  }
}
